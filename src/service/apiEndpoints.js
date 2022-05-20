export const endpoints = {
    workouts: {
        all: { url: '/workouts' },
        one: slug => ({ url: `/workouts/${slug}` })
    }
}