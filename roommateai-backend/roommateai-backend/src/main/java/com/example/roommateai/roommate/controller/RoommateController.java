package com.example.roommateai.roommate.controller;

import com.example.roommateai.roommate.dto.RoommateRequest;
import com.example.roommateai.roommate.entity.Roommate;
import com.example.roommateai.roommate.service.RoommateService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roommates")
@CrossOrigin(origins = "*") // tighten this to your actual frontend origin in production
public class RoommateController {

    private final RoommateService roommateService;

    public RoommateController(RoommateService roommateService) {
        this.roommateService = roommateService;
    }

    @PostMapping
    public ResponseEntity<Roommate> addRoommate(@Valid @RequestBody RoommateRequest request) {
        Roommate saved = roommateService.addRoommate(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Roommate>> getAllRoommates() {
        return ResponseEntity.ok(roommateService.getAllRoommates());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Roommate> getRoommateById(@PathVariable Long id) {
        return ResponseEntity.ok(roommateService.getRoommateById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Roommate>> searchRoommates(@RequestParam String name) {
        return ResponseEntity.ok(roommateService.searchByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoommate(@PathVariable Long id) {
        roommateService.deleteRoommate(id);
        return ResponseEntity.noContent().build();
    }
}
