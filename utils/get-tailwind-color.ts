import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export default function (className: string): string | undefined {
    let selectedVarName = ""
    if (className.includes('-')) {
        const colorParts = className.split('-')
        if (colorParts.length < 2) return undefined
        selectedVarName = colorParts[1]
    }

    let color = fullConfig.theme.colors as any

    color = color[selectedVarName]

    return typeof color === 'string' ? color : undefined
}
