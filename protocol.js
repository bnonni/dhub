export default {
    protocol: 'https://dhub.com/schemas/dhub',
    published: true,
    types: {},
    structure: {
        repo: {
            $actions: [
                {
                    who: 'anyone',
                    can: ['read'],
                },
            ],
            commit: {
                $actions: [
                    {
                        who: 'anyone',
                        can: ['read'],
                    },
                ],
            }
        },
    },
};
