import { Modal } from '@/components/ui/modal'
import Image from 'next/image'

export const ScoreModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Score Viewer" description="View your score document">
            <div className="w-full">
                <Image
                    src="/num.png"
                    alt="Score"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                />
            </div>
        </Modal>
    )
}
