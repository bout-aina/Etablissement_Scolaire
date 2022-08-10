package com.example.etablissementbackend.services;

import com.example.etablissementbackend.entities.Event;
import com.example.etablissementbackend.repositories.EventRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Calendar;
import java.util.List;

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
    public List<Event> allevent(String kw) {
        if (kw == null)
        {
            List<Event> modules = eventRepository.findAllByOrderByDateDesc();


            return modules;
        }
        else{

            List<Event> etds = eventRepository.allevents(kw);

            return etds;
        }

    }

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
    @Override
    public List<Integer> eventbymonth() {
        Integer year = Calendar.getInstance().get(Calendar.YEAR);
        return eventRepository.eventbymonth(year);
    }

}