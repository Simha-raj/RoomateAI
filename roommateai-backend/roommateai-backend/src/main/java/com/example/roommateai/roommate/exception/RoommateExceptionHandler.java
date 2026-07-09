package com.example.roommateai.roommate.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class RoommateExceptionHandler {

    private static final Logger logger =
            LoggerFactory.getLogger(RoommateExceptionHandler.class);

    @ExceptionHandler(DuplicateRoommateException.class)
    public ResponseEntity<Map<String, Object>> handleDuplicate(DuplicateRoommateException ex) {

        logger.warn("DuplicateRoommateException: {}", ex.getMessage());

        return buildResponse(HttpStatus.CONFLICT, ex.getMessage());
    }

    @ExceptionHandler(RoommateNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleNotFound(RoommateNotFoundException ex) {

        logger.warn("RoommateNotFoundException: {}", ex.getMessage());

        return buildResponse(HttpStatus.NOT_FOUND, ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {

        logger.warn("Validation failed");

        Map<String, String> fieldErrors = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error -> {
            logger.warn("Field Validation Failed - {} : {}",
                    error.getField(),
                    error.getDefaultMessage());

            fieldErrors.put(error.getField(),
                    error.getDefaultMessage());
        });

        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", HttpStatus.BAD_REQUEST.value());
        body.put("error", "Validation failed");
        body.put("fields", fieldErrors);

        return ResponseEntity.badRequest().body(body);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneralException(Exception ex) {

        logger.error("Unhandled Exception occurred", ex);

        return buildResponse(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "An unexpected error occurred. Please contact the administrator."
        );
    }

    private ResponseEntity<Map<String, Object>> buildResponse(HttpStatus status,
                                                              String message) {

        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", Instant.now().toString());
        body.put("status", status.value());
        body.put("error", message);

        return ResponseEntity.status(status).body(body);
    }
}