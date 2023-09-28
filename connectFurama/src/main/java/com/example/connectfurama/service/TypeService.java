package com.example.connectfurama.service;

import com.example.connectfurama.model.Type;
import com.example.connectfurama.repository.ITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeService implements ITypeService{
    @Autowired
    ITypeRepository typeRepository;
    @Override
    public List<Type> getAllType() {
        return typeRepository.getTypeList();
    }
}
