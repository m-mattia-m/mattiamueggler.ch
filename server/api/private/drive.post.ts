const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    const body = await readBody(event) as RequestBody

    await sleep(500)

    if (body.password as string !== config.drivePassword as string) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: `You submitted password was incorrect. Please try again.`,
            stack: "",
        })
    }

    return {
        uploadUrl: config.driveUploadUrl,
        downloadUrl: config.driveDownloadUrl,
    } as ResponseBody
})

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface RequestBody {
    password: string
}

interface ResponseBody {
    uploadUrl: string
    downloadUrl: string
}