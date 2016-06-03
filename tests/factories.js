
export function stateFactory(state = {}) {
    return {
        cwd: state.cwd || '',
        structure: state.structure || {
            file1: { content: 'file1' },
            dir1: {
                childDir: {
                    childDirFile: { content: 'childDirFile' },
                },
                dir1File: { content: 'dir1File' },
            },
        },
        history: state.history || [],
    };
}
