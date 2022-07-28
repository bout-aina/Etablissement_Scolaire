package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.DepartementDTO;
import com.example.etablissementbackend.dtos.ModuleByProfDTO;
import com.example.etablissementbackend.dtos.ProfByDepartementDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.exceptions.DepartementNotFoundExeception;
import com.example.etablissementbackend.mappers.DeparMapperImpl;
import com.example.etablissementbackend.repositories.DepartementRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class DepartementServiceImpl implements DepartementService {
    private DepartementRepository departementRepository;

    private DeparMapperImpl dtoMapper;

    @Override
    public DepartementDTO saveDepartement(DepartementDTO departementDTO) {
        log.info("Saving new Departement");
         Departement departement=dtoMapper.fromDepartementDTO(departementDTO);
         Departement savedDepartement=departementRepository.save(departement);
        return dtoMapper.fromDepartement(savedDepartement);
    }

    @Override
    public List<DepartementDTO> listDepartement() {
        List<Departement> departements = departementRepository.findAll();
        List<DepartementDTO> departementDTOS= departements.stream()
                .map(departement -> dtoMapper.fromDepartement(departement))
                .collect(Collectors.toList());
        return departementDTOS;
    }


@Override
    public ProfByDepartementDTO getDepartement(Long departementId)  {
    Departement p= departementRepository.findById(departementId).orElse(null);
    ProfByDepartementDTO m= new ProfByDepartementDTO();
    m.setId(p.getId());
    m.setChef_Departement(p.getChef_Departement());
    m.setNom_Departement(p.getNom_Departement());
    m.setDescription(p.getDescription());

    List<String> listpr = new ArrayList<String>();
    int i=p.getProfs().size();
    while (i!=0)
    {
        Profs md=p.getProfs().get(i-1);
        listpr.add(md.getNom_Complet());
        i--;
    }
       m.setNom_prof(listpr);
       return m;


    }
    @Override
    public DepartementDTO updateDepartement(DepartementDTO departementDTO) {
        log.info("Saving new Departement");
        Departement departement=dtoMapper.fromDepartementDTO(departementDTO);
        Departement savedDepartement=departementRepository.save(departement);
        return dtoMapper.fromDepartement(savedDepartement);
    }
    @Override
     public void deleteDepartement(Long departementId){
        departementRepository.deleteById(departementId);

     }

    @Override
    public List<DepartementDTO> searchDepartements(String keyword) {
        List<Departement> customers=departementRepository.searchDepartement(keyword);
        List<DepartementDTO> customerDTOS = customers.stream().map(cust -> dtoMapper.fromDepartement(cust)).collect(Collectors.toList());
        return customerDTOS;
    }

}
