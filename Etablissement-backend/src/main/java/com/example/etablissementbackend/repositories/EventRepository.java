package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepository extends JpaRepository<Event,Long> {
    public List<Event> findAllByOrderByDateDesc();
    @Query("select count(m.id) from Event m where year(m.date) = :year  group by month(m.date) order by month(m.date)")

    List<Integer> eventbymonth(@Param("year") Integer year);
}
