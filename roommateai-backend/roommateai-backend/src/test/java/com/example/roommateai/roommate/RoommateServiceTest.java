package com.example.roommateai.roommate;

import com.example.roommateai.roommate.dto.RoommateRequest;
import com.example.roommateai.roommate.exception.DuplicateRoommateException;
import com.example.roommateai.roommate.exception.RoommateNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RoommateServiceTest {

    @Mock
    private RoommateRepository roommateRepository;

    private RoommateService roommateService;

    @BeforeEach
    void setUp() {
        roommateService = new RoommateService(roommateRepository);
    }

    @Test
    void addRoommate_savesNewRoommate_whenEmailIsUnique() {
        RoommateRequest request = new RoommateRequest();
        request.setName("Alex Doe");
        request.setEmail("alex@example.com");
        request.setRoomNumber("101");
        request.setMoveInDate(LocalDate.now());

        when(roommateRepository.existsByEmail("alex@example.com")).thenReturn(false);
        when(roommateRepository.save(any(Roommate.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        Roommate result = roommateService.addRoommate(request);

        assertThat(result.getName()).isEqualTo("Alex Doe");
        assertThat(result.getEmail()).isEqualTo("alex@example.com");
        verify(roommateRepository, times(1)).save(any(Roommate.class));
    }

    @Test
    void addRoommate_throwsDuplicateException_whenEmailAlreadyExists() {
        RoommateRequest request = new RoommateRequest();
        request.setName("Alex Doe");
        request.setEmail("alex@example.com");

        when(roommateRepository.existsByEmail("alex@example.com")).thenReturn(true);

        assertThatThrownBy(() -> roommateService.addRoommate(request))
                .isInstanceOf(DuplicateRoommateException.class);

        verify(roommateRepository, never()).save(any());
    }

    @Test
    void getRoommateById_throwsNotFoundException_whenIdDoesNotExist() {
        when(roommateRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> roommateService.getRoommateById(99L))
                .isInstanceOf(RoommateNotFoundException.class);
    }

    @Test
    void getAllRoommates_returnsListSortedByName() {
        Roommate zoe = new Roommate("Zoe", "zoe@example.com", null, null, null, null);
        Roommate amy = new Roommate("Amy", "amy@example.com", null, null, null, null);

        when(roommateRepository.findAll()).thenReturn(List.of(zoe, amy));

        List<Roommate> result = roommateService.getAllRoommates();

        assertThat(result).extracting(Roommate::getName).containsExactly("Amy", "Zoe");
    }
}
