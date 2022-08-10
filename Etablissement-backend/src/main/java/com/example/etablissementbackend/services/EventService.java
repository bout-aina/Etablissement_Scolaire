package com.example.etablissementbackend.services;

import com.example.etablissementbackend.entities.Event;

import java.util.List;

public interface EventService {
    Event saveEvent(Event event);


    List<Event> allevent(String kw);

    Event updateEtd(Long idevent, Event event);


    void deleteEvent(Long idevent);


    List<Event> eventlist();

    List<Integer> eventbymonth();
}
