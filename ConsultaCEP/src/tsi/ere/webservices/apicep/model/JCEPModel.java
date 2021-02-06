package tsi.ere.webservices.apicep.model;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JCEPModel {
	public static JSONObject jCEPObj(String resposta) {
		try {
			JSONParser parser = new JSONParser();
			JSONObject jCep = (JSONObject) parser.parse(resposta);
			return jCep;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}
