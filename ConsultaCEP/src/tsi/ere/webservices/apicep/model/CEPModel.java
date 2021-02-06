package tsi.ere.webservices.apicep.model;

public class CEPModel {
	private String cep, logradouro, complemento, bairro, localidade, uf;
	private int ibge,gia,ddd,siafi;
	public CEPModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CEPModel(String cep, String logradouro, String complemento, String bairro, String localidade, String uf,
			int ibge, int gia, int ddd, int siafi) {
		super();
		this.cep = cep;
		this.logradouro = logradouro;
		this.complemento = complemento;
		this.bairro = bairro;
		this.localidade = localidade;
		this.uf = uf;
		this.ibge = ibge;
		this.gia = gia;
		this.ddd = ddd;
		this.siafi = siafi;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getComplemento() {
		return complemento;
	}
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getLocalidade() {
		return localidade;
	}
	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public int getIbge() {
		return ibge;
	}
	public void setIbge(int ibge) {
		this.ibge = ibge;
	}
	public int getGia() {
		return gia;
	}
	public void setGia(int gia) {
		this.gia = gia;
	}
	public int getDdd() {
		return ddd;
	}
	public void setDdd(int ddd) {
		this.ddd = ddd;
	}
	public int getSiafi() {
		return siafi;
	}
	public void setSiafi(int siafi) {
		this.siafi = siafi;
	}
	@Override
	public String toString() {
		return String.format(
				"CEP: %s\n\tlogradouro: %s\n\tcomplemento: %s\n\tbairro: %s\n\tlocalidade: %s\n\tuf: %s\n\tibge: %s\n\tgia: %s\n\tddd: %s\n\tsiafi: %s",
				cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi);
	}
	
}
