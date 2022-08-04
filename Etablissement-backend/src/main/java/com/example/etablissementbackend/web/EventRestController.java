package com.example.etablissementbackend.web;

import com.example.etablissementbackend.entities.Event;
import com.example.etablissementbackend.services.EventServiceImp;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class EventRestController {
    private EventServiceImp eventService;


    @GetMapping("/events")
    public List<Event> events(){
        return eventService.eventlist();

    }

    @DeleteMapping("/event/{id}")
    public void deleteEvent(@PathVariable Long id){
        eventService.deleteEvent(id);
    }
    @PostMapping("/event")
    public Event saveEvent(@RequestBody Event event)  {
        return eventService.saveEvent(event);
    }

    @PutMapping("/event/{id}")
    public Event updateEvent(@PathVariable Long id,@RequestBody Event event) {
        return eventService.updateEtd(id,event);
    }


}
