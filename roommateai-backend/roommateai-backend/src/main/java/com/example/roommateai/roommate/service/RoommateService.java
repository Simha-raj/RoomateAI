package com.example.roommateai.roommate.service;

import com.example.roommateai.roommate.dto.RoommateRequest;
import com.example.roommateai.roommate.entity.Roommate;
import com.example.roommateai.roommate.exception.DuplicateRoommateException;
import com.example.roommateai.roommate.exception.RoommateNotFoundException;
import com.example.roommateai.roommate.repository.RoommateRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoommateService {

    private static final Logger logger =
            LoggerFactory.getLogger(RoommateService.class);

    private final RoommateRepository roommateRepository;

    public RoommateService(RoommateRepository roommateRepository) {
        this.roommateRepository = roommateRepository;
    }

    public Roommate addRoommate(RoommateRequest request) {

        logger.info("Received request to create roommate. Email={}, Name={}, Company={}",
                request.getEmail(),
                request.getName(),
                request.getCompany());

        if (roommateRepository.existsByEmail(request.getEmail())) {

            logger.warn("Duplicate roommate creation attempted. Email={}",
                    request.getEmail());

            throw new DuplicateRoommateException(
                    "A roommate with email " + request.getEmail() + " already exists");
        }

        Roommate roommate = new Roommate(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getRoomNumber(),
                request.getMoveInDate(),
                request.getCompany()
        );

        Roommate saved = roommateRepository.save(roommate);

        logger.info("Roommate created successfully. ID={}, Email={}",
                saved.getId(),
                saved.getEmail());

        return saved;
    }

    public List<Roommate> getAllRoommates() {

        logger.info("Fetching all roommates");

        List<Roommate> roommates = roommateRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(Roommate::getName,
                        String.CASE_INSENSITIVE_ORDER))
                .collect(Collectors.toList());

        logger.info("Fetched {} roommates", roommates.size());

        return roommates;
    }

    public Roommate getRoommateById(Long id) {

        logger.info("Fetching roommate with ID={}", id);

        return roommateRepository.findById(id)
                .orElseThrow(() -> {

                    logger.warn("Roommate not found. ID={}", id);

                    return new RoommateNotFoundException(id);
                });
    }

    public Optional<Roommate> findByEmail(String email) {

        logger.debug("Searching roommate by email={}", email);

        return roommateRepository.findByEmail(email);
    }

    public List<Roommate> searchByName(String query) {

        logger.info("Searching roommates with name containing '{}'", query);

        List<Roommate> result = roommateRepository.findAll()
                .stream()
                .filter(r -> r.getName().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());

        logger.info("Search completed. {} record(s) found", result.size());

        return result;
    }

    public void deleteRoommate(Long id) {

        logger.info("Deleting roommate with ID={}", id);

        if (!roommateRepository.existsById(id)) {

            logger.warn("Delete failed. Roommate not found. ID={}", id);

            throw new RoommateNotFoundException(id);
        }

        roommateRepository.deleteById(id);

        logger.info("Roommate deleted successfully. ID={}", id);
    }
}