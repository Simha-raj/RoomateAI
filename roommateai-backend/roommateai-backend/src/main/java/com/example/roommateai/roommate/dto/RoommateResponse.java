package com.example.roommateai.roommate.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public class RoommateResponse {
    private String name;
    private String email;
    private String phone;
    private LocalDate moveInDate;
}
