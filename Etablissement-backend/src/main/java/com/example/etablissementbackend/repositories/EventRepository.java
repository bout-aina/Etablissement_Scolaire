package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event,Long> {
    public List<Event> findAllByOrderByDateDesc();
}
