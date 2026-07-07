package com.example.roommateai.roommate;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

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

    @Column(length = 500)
    private String notes;

    public Roommate() {
    }

    public Roommate(String name, String email, String phone, String roomNumber,
                     LocalDate moveInDate, String notes) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.roomNumber = roomNumber;
        this.moveInDate = moveInDate;
        this.notes = notes;
    }

}
