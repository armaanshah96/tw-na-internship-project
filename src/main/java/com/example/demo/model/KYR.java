package com.example.demo.model;
import javax.persistence.*;
import java.util.Objects;

@Entity
public class KYR {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String title;
    String summary;

    public KYR(String title,String summary){
        this.title=title;
        this.summary=summary;
    }

    public KYR(){}

    public void setTitle(String title){
        this.title=title;
    }

    public void setSummary(String summary){
        this.summary=summary;
    }

    public String getTitle(){
        return this.title;
    }

    public String getSummary(){
        return this.summary;
    }
}
