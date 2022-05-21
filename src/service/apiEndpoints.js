export const endpoints = {
    workouts: {
        all: { url: '/workouts' },
        one: slug => ({ url: `/workouts/${slug}` })
    },
    exercises: {
        all: slug => ({url: `/workouts/${slug}/exercises`}),
        one: slug => ({url: `/workouts/${slug[0]}/exercises/${slug[1]}`})
    }
}