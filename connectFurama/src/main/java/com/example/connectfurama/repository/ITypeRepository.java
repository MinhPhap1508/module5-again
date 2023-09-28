package com.example.connectfurama.repository;

import com.example.connectfurama.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeRepository extends JpaRepository<Type, Integer> {
    @Query(value = "SELECT * FROM type",nativeQuery = true)
    List<Type> getTypeList();
}
