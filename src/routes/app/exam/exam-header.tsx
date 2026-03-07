import { Button } from '@/components/ui/button';
import { Heart, Pen } from 'lucide-react';

export const ExamHeader = () => {
    return (
        <header className="bg-white border rounded-2xl flex items-center justify-between p-6">
            <div className="flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Heart size={30} />
                </div>

                <div>
                    <div>
                        <span className="text-primary font-semibold">Johnathan D. Doe</span> • ID:
                        #PX-88231
                    </div>
                    <div className="font-bold text-xl">Holter Monitor - 24 Hour Cardiac Study</div>
                </div>
            </div>
            <Button variant="outline">
                <Pen />
                Edit Exam Details
            </Button>
        </header>
    );
};
