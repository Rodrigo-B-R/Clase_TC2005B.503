const rdInvitado = document.getElementById("invitado");
const botonEnviar= document.getElementById("boton-enviar")
const checkTerminos =document.getElementById("terminos")
const checkEmail = document.getElementById("emails")
const inputEmail = document.getElementById("email")
const inputNombre = document.getElementById("nombre")
const selPaises = document.getElementById("select_pais")
const selRegiones = document.getElementById("select_region")
const loginButton = document.getElementById("login_button")
const expectedEmail = "e"
const expectedNombre = "nombre"
const login = () => {

const email_val = inputEmail.value;
const nombre_val = inputNombre.value;

if( email_val === expectedEmail && nombre_val === expectedNombre){
                window.location.replace("./profile.html")

            }

            
            

        }
loginButton.addEventListener("click", login)


let paisesData = []


const activarEnviar = () => {
            botonEnviar.disabled = !(checkEmail.checked && checkTerminos.checked)
            

        }
const enviar = () => {

            email_val = inputEmail.value
            nombre_val = inputNombre.value

            console.log(email_val)
            console.log(nombre_val)

            

        }

        const loadJson = async () => {

const res = await fetch("./data.json")
aisesData = await res.json()

paisesData.forEach( (pais) => {
    const option = document.createElement("option")
    option.value = pais.countryShortCode
    option.textContent = pais.countryName
    selPaises.appendChild(option)
            });
        }
const cargarRegiones = () => {
    const codigoPais = selPaises.value
    selRegiones.innerHTML = '<option value="0">Selecciona una region</option>'

    if (codigoPais === "0") return

    const pais = paisesData.find(p => p.countryShortCode === codigoPais)
    if (!pais) return

    pais.regions.forEach(region => {
        const option = document.createElement("option")
        option.value = region.shortCode
        option.textContent = region.name
        selRegiones.appendChild(option)
            })
        }

loadJson()

selPaises.addEventListener("change", cargarRegiones)
checkEmail.addEventListener("click", activarEnviar)
checkTerminos.addEventListener("change", activarEnviar)

botonEnviar.addEventListener("click", enviar)
