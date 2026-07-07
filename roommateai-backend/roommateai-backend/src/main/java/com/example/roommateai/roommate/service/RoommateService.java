package com.example.roommateai.roommate.service;

import com.example.roommateai.roommate.dto.RoommateRequest;
import com.example.roommateai.roommate.entity.Roommate;
import com.example.roommateai.roommate.exception.DuplicateRoommateException;
import com.example.roommateai.roommate.exception.RoommateNotFoundException;
import com.example.roommateai.roommate.repository.RoommateRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoommateService {

    private final RoommateRepository roommateRepository;

    public RoommateService(RoommateRepository roommateRepository) {
        this.roommateRepository = roommateRepository;
    }

    public Roommate addRoommate(RoommateRequest request) {
        if (roommateRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateRoommateException(
                    "A roommate with email " + request.getEmail() + " already exists");
        }

        Roommate roommate = new Roommate(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getRoomNumber(),
                request.getMoveInDate()
        );

        return roommateRepository.save(roommate);
    }

    public List<Roommate> getAllRoommates() {
        return roommateRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(Roommate::getName, String.CASE_INSENSITIVE_ORDER))
                .collect(Collectors.toList());
    }

    public Roommate getRoommateById(Long id) {
        return roommateRepository.findById(id)
                .orElseThrow(() -> new RoommateNotFoundException(id));
    }

    public Optional<Roommate> findByEmail(String email) {
        return roommateRepository.findByEmail(email);
    }

    public List<Roommate> searchByName(String query) {
        String needle = query.toLowerCase();
        return roommateRepository.findAll()
                .stream()
                .filter(r -> r.getName().toLowerCase().contains(needle))
                .collect(Collectors.toList());
    }

    public void deleteRoommate(Long id) {
        if (!roommateRepository.existsById(id)) {
            throw new RoommateNotFoundException(id);
        }
        roommateRepository.deleteById(id);
    }
}
