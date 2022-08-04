package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Etudiant;
import com.example.etablissementbackend.entities.Event;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.mappers.EtudiantMapperImpl;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.EtudiantRepository;
import com.example.etablissementbackend.repositories.EventRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class EventServiceImp implements EventService{
    private EventRepository eventRepository;

    @Override
    public Event saveEvent(Event event) {
        Event savedEvent=eventRepository.save(event);
        return savedEvent;    }

    @Override
    public Event updateEtd(Long idevent, Event event) {
        Event ev=eventRepository.findById(idevent).orElse(null);

        ev.setNom(event.getNom());
        ev.setDescription(event.getDescription());
        ev.setHeure(event.getHeure());
        ev.setLieu(event.getLieu());
        ev.setDate(event.getDate());
        Event savedEvent = eventRepository.save(ev);
        return savedEvent;
    }

    @Override
    public void deleteEvent(Long idevent) {
        eventRepository.deleteById(idevent);
    }

    @Override
    public List<Event> eventlist() {
        List<Event> ev = eventRepository.findAllByOrderByDateDesc();


        return ev;
    }
}