import {NgModule} from '@angular/core';

import {AfterWherePipe} from './after-where.pipe';
import {AfterPipe} from './after.pipe';
import {BeforeWherePipe} from './before-where.pipe';
import {BeforePipe} from './before.pipe';
import {ChunkByPipe} from './chunk-by.pipe';
import {ConcatPipe} from './concat.pipe';
import {ContainsPipe} from './contains.pipe';
import {CountByPipe} from './count-by.pipe';
import {DefaultsPipe} from './defaults.pipe';
import {EveryPipe} from './every.pipe';
import {FilterByPipe} from './filter-by.pipe';
import {FirstPipe} from './first.pipe';
import {FlattenPipe} from './flatten.pipe';
import {FuzzyByPipe} from './fuzzy-by.pipe';
import {FuzzyPipe} from './fuzzy.pipe';
import {GroupByPipe} from './group-by.pipe';
import {IsEmptyPipe} from './is-empty.pipe';
import {JoinPipe} from './join.pipe';
import {LastPipe} from './last.pipe';
import {MapPipe} from './map.pipe';
import {MeanPipe} from './mean.pipe';
import {OmitPipe} from './omit.pipe';
import {OrderByPipe} from './order-by.pipe';
import {PickPipe} from './pick.pipe';
import {RangePipe} from './range.pipe';
import {RemoveWithPipe} from './remove-with.pipe';
import {RemovePipe} from './remove.pipe';
import {ReversePipe} from './reverse.pipe';
import {SearchFieldPipe} from './search-field.pipe';
import {ToArrayPipe} from './to-array.pipe';
import {UniqPipe} from './uniq.pipe';
import {WherePipe} from './where.pipe';
import {XORPipe} from './xor.pipe';

@NgModule({
  declarations: [
    AfterWherePipe, BeforeWherePipe, AfterPipe,       BeforePipe,  ChunkByPipe,  ConcatPipe,
    ContainsPipe,   CountByPipe,     DefaultsPipe,    EveryPipe,   FilterByPipe, FirstPipe,
    FlattenPipe,    FuzzyByPipe,     FuzzyPipe,       GroupByPipe, IsEmptyPipe,  JoinPipe,
    LastPipe,       MapPipe,         MeanPipe,        OmitPipe,    PickPipe,     RangePipe,
    RemoveWithPipe, ReversePipe,     SearchFieldPipe, RemovePipe,  ToArrayPipe,  UniqPipe,
    WherePipe,      XORPipe,         OrderByPipe
  ],
  exports: [
    AfterWherePipe, BeforeWherePipe, AfterPipe,       BeforePipe,  ChunkByPipe,  ConcatPipe,
    ContainsPipe,   CountByPipe,     DefaultsPipe,    EveryPipe,   FilterByPipe, FirstPipe,
    FlattenPipe,    FuzzyByPipe,     FuzzyPipe,       GroupByPipe, IsEmptyPipe,  JoinPipe,
    LastPipe,       MapPipe,         MeanPipe,        OmitPipe,    PickPipe,     RangePipe,
    RemoveWithPipe, ReversePipe,     SearchFieldPipe, RemovePipe,  ToArrayPipe,  UniqPipe,
    WherePipe,      XORPipe,         OrderByPipe
  ]
})
export class CollectionPipesModule {}
