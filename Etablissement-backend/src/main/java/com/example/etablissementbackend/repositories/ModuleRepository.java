package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public interface ModuleRepository extends JpaRepository<Module,Long> {
    @Query("select m from Module m where m.nom like :kw")

    List<Module> searchModule(@Param("kw") String keyword);

    @Query("select m from Module m where m.nom like :kw")

    List<Module> allmodules(@Param("kw") String keyword);
}
