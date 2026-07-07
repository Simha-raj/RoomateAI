package com.example.roommateai.roommate.exception;

public class RoommateNotFoundException extends RuntimeException {

    public RoommateNotFoundException(Long id) {
        super("Roommate not found with id: " + id);
    }
}
