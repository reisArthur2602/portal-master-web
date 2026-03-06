import { MembersSearchInput } from './members-search-input';

export const MembersHeader = () => {
    return (
        <header className="bg-white px-8 py-3 flex items-center  justify-between gap-6 border-b">
            <MembersSearchInput />
        </header>
    );
};
