package dev;

//package me.tsccoding.mongodb;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.conversions.Bson;

public class MongoMain {
    public static void main(String args[]) {
    	String uri="mongodb://localhost:27017";
    	//String uri="mongodb://appuser:AppData2022@cluster0.aga82.mongodb.net:27017/admin?replicaSet=MongoDB-shard-0&ssl=true";
        //String uri = "mongodb://Admin:admin@mongodb-shard-00-00-altt9.mongodb.net:27017,mongodb-shard-00-01-altt9.mongodb.net:27017,mongodb-shard-00-02-altt9.mongodb.net:27017/admin?replicaSet=MongoDB-shard-0&ssl=true";
        MongoClientURI clientURI = new MongoClientURI(uri);
        MongoClient mongoClient = new MongoClient(clientURI);

        MongoDatabase mongoDatabase = mongoClient.getDatabase("tom");
        MongoCollection collection = mongoDatabase.getCollection("users");

        System.out.println("Database Connected");
        Bson filter = new Document("username", "testerb");
        Document found = (Document) collection.find(new Document("username", "testerb")).first();
       // Document found = (Document) collection.find(filter).first();

        if(found != null){
            System.out.println("Found User");

            Bson updatedvalue = new Document("Age", 26);
            Bson updateoperation = new Document("$set", updatedvalue);
            collection.updateOne(found,updateoperation);
            System.out.println("User Updated");
        }
    }
}

