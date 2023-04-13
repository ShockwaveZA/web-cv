import {ILanguageExperience, DATE_STARTED_WORKING} from './data';
import moment from 'moment';

export interface ILanguageExperienceItem {
    name: string;
    icon?: JSX.Element;
    value: number;
    label: string;
}

export const mapToLanguageExperienceItem = (item: ILanguageExperience): ILanguageExperienceItem => {
    const { name, icon, startYear } = item;
    const currentDate = moment()
    const end = item.endYear ? moment([item.endYear, 1, 1])  : currentDate;

    const totalWorkingExperience: number = currentDate.diff(moment(DATE_STARTED_WORKING), 'years', true);

    const experience = end.diff(moment([item.startYear, 1, 1]), 'years', true);

    const value = Math.round((experience / totalWorkingExperience) * 100);

    const formatter = new Intl.RelativeTimeFormat('en');
    let label = '';
    const getDatePart = (experience: number, unit: any): string => {
        const parts = formatter.formatToParts(unit === 'months' ? experience * 12 : experience, unit);
        const [_, ...dateParts] = parts.filter(part => part.type === 'literal' || part.type === 'integer');
        return dateParts.map(p => p.type !== 'literal' ? Math.round(Number(p.value)) : p.value).join('');
    }
    label = experience < 1 ? getDatePart(experience, 'months') : getDatePart(experience, 'years');

    return {name, icon, value, label};
}