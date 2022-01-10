const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/ingresoController')

//mostrar todos los alumnos (GET)
router.get('https://enero9noche.herokuapp.com/', alumnoController.mostrar)
//crear alumno (POST)
router.post('https://enero9noche.herokuapp.com/crear', alumnoController.crear)
//edita alumno(POST)
router.post('https://enero9noche.herokuapp.com/editar', alumnoController.editar)
//elimina (GET)
router.get('https://enero9noche.herokuapp.com/borrar/:id', alumnoController.borrar)

//mio, muestra información filtrada en el index
router.post('https://enero9noche.herokuapp.com/otroMostrar', alumnoController.mostrarTodo)

//ingreso arriendos
//promedio anual
router.get('https://enero9noche.herokuapp.com/promedios', alumnoController.promedios)
//promedios mensuales
router.get('https://enero9noche.herokuapp.com/vistaMensual', alumnoController.vistaMensual)

//para ingresos externos
router.post('https://enero9noche.herokuapp.com/crearGananciasExternas', alumnoController.crearGananciasExternas)
router.get('https://enero9noche.herokuapp.com/mostrarGananciasExternas', alumnoController.mostrarGananciasExternas)
router.post('https://enero9noche.herokuapp.com/editarIngresoExterno', alumnoController.editarIngresoExterno)
router.post('https://enero9noche.herokuapp.com/filtroIngresosExternos', alumnoController.filtroIngresosExternos)
router.get('https://enero9noche.herokuapp.com/mostrarVistaMenAnulIngresosExternos', alumnoController.mostrarMesAñoIngresoExterno)

//para dineros salientes
router.get('https://enero9noche.herokuapp.com/mostrarDinerosSalida', alumnoController.mostrarDinerosSalida)
router.post('https://enero9noche.herokuapp.com/crearSalidaDinero', alumnoController.crearSalidaDinero)
router.post('https://enero9noche.herokuapp.com/editarSalidaDinero', alumnoController.editarSalidaDinero)
router.post('https://enero9noche.herokuapp.com/filtroSalidaDinero', alumnoController.filtroSalidaDinero)
router.get('https://enero9noche.herokuapp.com/mostrarMesAnoSalidaDinero', alumnoController.mostrarMesAnoSalidaDinero)

//para validar logeo
router.get('https://enero9noche.herokuapp.com/abrirPaginaDeLogeo', alumnoController.abrirPaginaDeLogeo)
router.post('https://enero9noche.herokuapp.com/validarLogeo', alumnoController.validarLogeo)






module.exports = router