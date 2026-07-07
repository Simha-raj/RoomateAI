package com.example.roommateai.roommate.repository;

import com.example.roommateai.roommate.entity.Roommate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoommateRepository extends JpaRepository<Roommate, Long> {

    Optional<Roommate> findByEmail(String email);

    boolean existsByEmail(String email);
}
