
import { Checkbox } from '@headlessui/react';

const CheckboxInput = ({ enabled, setEnabled }: { enabled: boolean; setEnabled: (value: boolean) => void }) => {
    return (
        <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className="group block size-5 rounded bg-[#FF6910] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"
        >
            <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Checkbox>
    )
}

export default CheckboxInput
