import React from 'react';
import BookNowDataJSON from './BookNow.data';
import {
  planDetailsPolhena,
  planDetailsSigiriya,
  planDetailsDalada,
} from './PlanDetails.data';
import {
  inExDataPolhena,
  inExDataSigiriya,
  inExDataDalada,
} from './InExData.data';
import {
  briefPlanDataPolhena,
  briefPlanDataSigiriya,
  briefPlanDataDalada,
} from './BriefPlanData.data';

function APackageDataMain(pageTitle) {
  switch (pageTitle) {
    case 'Polhena':
      return {
        briefPlanData: briefPlanDataPolhena,
        inExData: inExDataPolhena,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsPolhena,
      };
    case 'Sigiriya':
      return {
        briefPlanData: briefPlanDataSigiriya,
        inExData: inExDataSigiriya,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsSigiriya,
      };
    case 'Dalada':
      return {
        briefPlanData: briefPlanDataDalada,
        inExData: inExDataDalada,
        bookNowData: BookNowDataJSON(
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum',
          'Lorem ipsum'
        ),
        planDetails: planDetailsDalada,
      };
    default:
      return { message: 'somethings wrong' };
  }
}

export default APackageDataMain;
