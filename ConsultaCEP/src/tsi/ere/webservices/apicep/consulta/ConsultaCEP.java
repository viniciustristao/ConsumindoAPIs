package tsi.ere.webservices.apicep.consulta;

import javax.swing.JOptionPane;

import org.json.simple.JSONObject;

import tsi.ere.webservices.apicep.model.CEPModel;
import tsi.ere.webservices.apicep.model.JCEPModel;
import tsi.ere.webservices.apicep.socket.Socket;

public class ConsultaCEP {

	public static void main(String[] args) {
		String scep = JOptionPane.showInputDialog(null, "Informe o CEP que deseja buscar", "Busca CEP", JOptionPane.QUESTION_MESSAGE);
		String retorno = Socket.buscadados(scep);
		JSONObject object = JCEPModel.jCEPObj(retorno);
		
		CEPModel cep = new CEPModel();
		cep.setBairro((String)object.get("bairro"));
		cep.setCep((String)object.get("cep"));
		cep.setComplemento((String)object.get("complemento"));
		cep.setLocalidade((String)object.get("localidade"));
		cep.setLogradouro((String)object.get("logradouro"));
		cep.setUf((String)object.get("uf"));
		String ddd = (String)object.get("ddd"),
				gia = (String)object.get("gia"),
				ibge = (String)object.get("ibge"),
				siafi = (String)object.get("siafi");
		cep.setDdd(ddd.isEmpty()?0:Integer.parseInt(ddd));
		cep.setGia(gia.isEmpty()?0:Integer.parseInt(gia));
		cep.setIbge(ibge.isEmpty()?0:Integer.parseInt(ibge));
		cep.setSiafi(siafi.isEmpty()?0:Integer.parseInt(siafi));
		
		JOptionPane.showMessageDialog(null, cep, "CEP: "+cep.getCep(), JOptionPane.PLAIN_MESSAGE);
		
	}

}
