package com.example.etablissementbackend.services;

import com.example.etablissementbackend.dtos.ProfsDTO;
import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import com.example.etablissementbackend.mappers.ProfsMapperImpl;
import com.example.etablissementbackend.repositories.DepartementRepository;
import com.example.etablissementbackend.repositories.ProfsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProfsServiceImpl implements ProfsService{
    private ProfsRepository profsRepository;
    private DepartementRepository departementRepository;
    private ProfsMapperImpl dtoMapper;
    public ProfsServiceImpl(ProfsRepository profsRepository,ProfsMapperImpl dtoMapper,DepartementRepository departementRepository) {
        this.profsRepository = profsRepository;
        this.dtoMapper = dtoMapper;
        this.departementRepository = departementRepository;

    }

    @Override
    public ProfsDTO saveProfs(ProfsDTO profsDTO) {
        List<Departement> deplist=departementRepository.findAll();
        Departement dep;
        for (Departement d:deplist)
        {
            if(d.getNomdep().equals(profsDTO.getNom_departement()))
            {
                dep=departementRepository.findById(d.getId()).orElse(null);
                Profs p=new Profs();
                p.setMail(profsDTO.getMail());
                p.setNom_Complet(profsDTO.getNom_complet());
                p.setAdresse(profsDTO.getAdresse());
                p.setTel(profsDTO.getTel());
                p.setDepartement(dep);
                Profs savedProf = profsRepository.save(p);
                return dtoMapper.fromProfs(savedProf);
            }
        }
        return null;


}
    @Override
    public ProfsDTO updateProf(Long idprof,ProfsDTO profsDTO) {
        List<Departement> deplist=departementRepository.findAll();
        Departement dep;
        for (Departement d:deplist)
        {
            if(d.getNomdep().equals(profsDTO.getNom_departement()))
            {
                dep=departementRepository.findById(d.getId()).orElse(null);
                Profs p=profsRepository.findById(idprof).orElse(null);
                p.setMail(profsDTO.getMail());
                p.setNom_Complet(profsDTO.getNom_complet());
                p.setAdresse(profsDTO.getAdresse());
                p.setTel(profsDTO.getTel());
                p.setDepartement(dep);
                Profs savedProf = profsRepository.save(p);
                return dtoMapper.fromProfs(savedProf);            }
        }
        return null;

    }



    @Override
    public List<ProfsDTO> ListProfs() {

        List<Profs> profs = profsRepository.findAll();
        List<ProfsDTO> profDTOS = null;
        if(dtoMapper!=null)
        {
        profDTOS = profs.stream()
                .map(prof -> dtoMapper.fromProfs(prof))
                .collect(Collectors.toList());}
        return profDTOS;

    }



    @Override
    public List<Departement> searchDepartement(String keyword) {
        List<Departement> dep= departementRepository.searchDepartement(keyword);
        return dep;
    }
    @Override
    public  List<Integer> nbrProfPourChaqueDep()
    {
        List<Integer> nbr = profsRepository.nbrProfPourChaqueDep();
        return  nbr;
    }
    @Override
    public List<ProfsDTO> allprof(String kw) {
        if (kw == null)
        {
            List<Profs> modules = profsRepository.findAll();
            List<ProfsDTO> moduleDTOS =
                    modules.stream()
                            .map(module -> dtoMapper.fromProfs(module))
                            .collect(Collectors.toList());


            return moduleDTOS;
        }
        else{

            List<Profs> etds = profsRepository.allprofs(kw);
            List<ProfsDTO> etudiantDTOS =
                    etds.stream()
                            .map(module -> dtoMapper.fromProfs(module))
                            .collect(Collectors.toList());

            return etudiantDTOS;
        }

    }
    @Override
    public List<String> AllDepartement() {
        List<Departement> dep= departementRepository.findAll();
        List<String> names = new ArrayList<String>();
        for(Departement d:dep)
        {
            names.add(d.getNomdep());
        }
        return names;
    }

    @Override
    public List<ProfsDTO> searchProf(String keyword) {
        List<Profs> customers=profsRepository.searchProf(keyword);
        List<ProfsDTO> customerDTOS = customers.stream().map(cust -> dtoMapper.fromProfs(cust)).collect(Collectors.toList());
        return customerDTOS;
    }

    @Override
    public void deleteProfs(Long ProfsId) {

        profsRepository.deleteById(ProfsId);
    }

    @Override
    public List<String> searchDetailsProf(Long id) {
       Profs p= profsRepository.findById(id).orElse(null);


        List<String> listmd = new ArrayList<String>();
        int i=p.getModule().size();
        while (i!=0)
        {
            Module md=p.getModule().get(i-1);
            listmd.add(md.getNom());
            i--;
        }
        return listmd;
    }

}
