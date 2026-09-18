/** 阶段有序表（顺序即向导前进方向）。 */
export const IMPORT_STAGES = [
    'select', 'analyze', 'decide', 'confirm', 'execute', 'done',
];
/** 向导步骤/流程阶段 → 用户视角阶段。 */
export function stageOf(step) {
    switch (step) {
        case 'select':
        case 'decrypt-archive':
            return 'select';
        case 'analyzing':
        case 'compatibility':
            return 'analyze';
        case 'preview':
        case 'conflicts':
        case 'path-mapping':
        case 'secrets':
            return 'decide';
        case 'confirm':
            return 'confirm';
        case 'importing':
            return 'execute';
        case 'result':
            return 'done';
        default:
            return 'select';
    }
}
/** 构建步骤条模型（线性向导：index 之前 done，当前 current，之后 todo）。 */
export function importStepperModel(step) {
    const current = stageOf(step);
    const index = IMPORT_STAGES.indexOf(current);
    return {
        index,
        steps: IMPORT_STAGES.map((key, i) => ({
            key,
            labelKey: `import.stage.${key}`,
            state: i < index ? 'done' : i === index ? 'current' : 'todo',
        })),
    };
}
//# sourceMappingURL=import-stepper.js.map