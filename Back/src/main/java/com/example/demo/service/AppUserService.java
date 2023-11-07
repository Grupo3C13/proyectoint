package com.example.demo.service;

import com.example.demo.entity.AppUser;
import com.example.demo.repository.AppUserRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AppUserService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired

    public AppUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> usuarioBuscado = AppUserRepository.findByEmail(username);
        if(usuarioBuscado.isPresent()){
            return usuarioBuscado.get();
        }
        else{
            throw new UsernameNotFoundException("Usuario/a con correo " + username + " no se encuentra en la BD.");
        }
    }
}
