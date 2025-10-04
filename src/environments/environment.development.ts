const baseurlUsuario = 'http://localhost:8080/api/v1/usuario/';
const baseurlLigacoes = 'http://localhost:8080/api/v1/ura/ligacoes/';


export const environment = {
    apiAutenticarUsuario : baseurlUsuario + 'autenticar',
    apiListarLigacoesUra : baseurlLigacoes + 'listar'
};
