function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const fileIdsToUpdate: number[] = [];

    for (let change of changes) {
        const [lastUpdatedTime, updatedFileID] = change;

        if (lastUpdatedTime > lastBackupTime) {
            if (!fileIdsToUpdate.includes(updatedFileID)) {
                fileIdsToUpdate.push(updatedFileID);
            }
        }
    }

    return fileIdsToUpdate.sort((fileId1, fileId2) => fileId1 - fileId2);
}

