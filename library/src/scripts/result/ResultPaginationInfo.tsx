/**
 * @copyright 2009-2020 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import { ILinkPages } from "@library/navigation/SimplePagerModel";
import { resultPaginationInfoClasses } from "@library/result/ResultPaginationInfo.styles";
import ScreenReaderContent from "@library/layout/ScreenReaderContent";
import Translate from "@library/content/Translate";
import { numberFormattedForTranslations } from "@library/content/NumberFormatted";

interface IProps {
    pages?: ILinkPages;
}

/**
 * Component for displaying pagination information in a format like "11-20 of 563".
 */
export function ResultPaginationInfo(props: IProps) {
    const { pages } = props;
    if (!pages || pages.currentPage == null || pages.limit == null || pages.total == null) {
        return null;
    }

    const { total = 0, currentPage, limit } = pages;

    let resultStart = (currentPage - 1) * limit + 1;
    let resultEnd = Math.min(resultStart + limit - 1, total);

    const classes = resultPaginationInfoClasses();

    return (
        <div className={classes.root}>
            <ScreenReaderContent>
                <Translate source={"Result(s) <0/> to <1/> of <2/>"} c0={resultStart} c1={resultEnd} c2={total} />
            </ScreenReaderContent>
            <span aria-hidden={true}>
                <Translate
                    source={"<0/>-<1/> of <2/>"}
                    c0={numberFormattedForTranslations({
                        value: resultStart,
                    })}
                    c1={numberFormattedForTranslations({
                        value: resultEnd,
                    })}
                    c2={numberFormattedForTranslations({
                        value: total,
                    })}
                />
            </span>
        </div>
    );
}
