package com.example.demo.model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class KYR {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String title;
    String summary;

    @OneToMany(mappedBy = "kyr", fetch = FetchType.LAZY, orphanRemoval = false)
    List<AddInfo> additionalInfoList = new ArrayList<>();

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

    public void setAdditionalInfoList(List<AddInfo> additionalInfoList) {
        this.additionalInfoList = additionalInfoList;
    }

    public String getTitle(){
        return this.title;
    }

    public String getSummary(){
        return this.summary;
    }

    public List<AddInfo> getAdditionalInfoList() {
        return additionalInfoList;
    }
}
