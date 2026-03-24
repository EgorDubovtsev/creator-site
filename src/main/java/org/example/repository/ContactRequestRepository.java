package org.example.repository;

import org.example.entity.ContactRequestEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRequestRepository extends JpaRepository<ContactRequestEntity, Long> {
    @Query("""
            SELECT cr
            FROM ContactRequestEntity cr
            WHERE cr.isSend=false
            """)
    Page<ContactRequestEntity> findAllUnsend(Pageable pageRequest);
}
