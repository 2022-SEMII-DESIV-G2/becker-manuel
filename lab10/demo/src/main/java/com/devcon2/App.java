package com.devcon2;
import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        get("/hello", (req, res) -> "Hello World");
       // System.out.println( "Hello World!" );
    }
}
