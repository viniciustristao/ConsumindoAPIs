package tsi.ere.webservices.apicep.socket;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class Socket {
	public static String buscadados(String cep) {
		URL url;
		try {
			url = new URL("https://viacep.com.br/ws/"+cep+"/json");
			URLConnection con = url.openConnection();
			BufferedReader input = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"));
			String line;
			StringBuilder source = new StringBuilder();
			while ((line = input.readLine()) != null)
				source.append(line);
			input.close();
			return source.toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
