package com.example.roommateai.roommate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Setter
@Getter
@Entity
@Table(name = "roommates")
public class Roommate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    private String phone;

    private String roomNumber;

    private LocalDate moveInDate;

    public Roommate() {
    }

    public Roommate(String name, String email, String phone, String roomNumber,
                     LocalDate moveInDate) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.roomNumber = roomNumber;
        this.moveInDate = moveInDate;
    }

}
