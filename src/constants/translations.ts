export const TRANSLATIONS = {
    en: {
        "Extensions List": "Extensions List",
        "All": "All",
        "Active": "Active",
        "Inactive": "Inactive",
        "Remove": "Remove",
        "DeleteAlertTitle": "Delete Extension",
        "DeleteAlertMessage": "Do you really want to delete this extension?",
        "Cancel": "Cancel",
        "Delete": "Delete",
        "DevLens_desc": "Quickly inspect page layouts and visualize element boundaries.",
        "StyleSpy_desc": "Instantly analyze and copy CSS from any webpage element.",
        "SpeedBoost_desc": "Optimizes browser resource usage to accelerate page loading.",
        "JSONWizard_desc": "Formats, validates, and prettifies JSON responses in-browser.",
        "TabMaster Pro_desc": "Organizes browser tabs into groups and sessions.",
        "ViewportBuddy_desc": "Simulates various screen resolutions directly within the browser.",
        "Markup Notes_desc": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "GridGuides_desc": "Overlay customizable grids and alignment guides on any webpage.",
        "Palette Picker_desc": "Instantly extracts color palettes from any webpage.",
        "LinkChecker_desc": "Scans and highlights broken links on any page.",
        "DOM Snapshot_desc": "Capture and export DOM structures quickly.",
        "ConsolePlus_desc": "Enhanced developer console with advanced filtering and logging."
    },
    es: {
        "Extensions List": "Lista de Extensiones",
        "All": "Todos",
        "Active": "Activos",
        "Inactive": "Inactivos",
        "Remove": "Eliminar",
        "DeleteAlertTitle": "Eliminar Extensión",
        "DeleteAlertMessage": "¿Realmente deseas eliminar esta extensión?",
        "Cancel": "Cancelar",
        "Delete": "Eliminar",
        "DevLens_desc": "Inspecciona rápidamente diseños de página y visualiza los límites de los elementos.",
        "StyleSpy_desc": "Analiza y copia instantáneamente CSS de cualquier elemento de una página web.",
        "SpeedBoost_desc": "Optimiza el uso de recursos del navegador para acelerar la carga de la página.",
        "JSONWizard_desc": "Formatea, valida y embellece las respuestas JSON en el navegador.",
        "TabMaster Pro_desc": "Organiza las pestañas del navegador en grupos y sesiones.",
        "ViewportBuddy_desc": "Simula varias resoluciones de pantalla directamente dentro del navegador.",
        "Markup Notes_desc": "Permite anotaciones y notas directamente en las páginas web para depuración colaborativa.",
        "GridGuides_desc": "Superpone cuadrículas personalizables y guías de alineación en cualquier página web.",
        "Palette Picker_desc": "Extrae instantáneamente paletas de colores de cualquier página web.",
        "LinkChecker_desc": "Escanea y resalta enlaces rotos en cualquier página.",
        "DOM Snapshot_desc": "Captura y exporta estructuras DOM rápidamente.",
        "ConsolePlus_desc": "Consola de desarrollador mejorada con filtrado y registro avanzados."
    }
} as const;

export type Language = keyof typeof TRANSLATIONS;
export type TranslationKey = keyof typeof TRANSLATIONS["en"];
