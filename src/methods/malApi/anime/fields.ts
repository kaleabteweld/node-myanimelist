import { WorkForList } from "../common";
import {
  AnimeForList,
  AnimeForDetails,
  AnimeListStatus,
  AnimeListStatusBase,
} from "./types";

import { field as f } from "../util";

export interface AnimeSearchItem<T> {
  node: T;
}

/**
 * Anime For List
 */
export class AnimeFields<T> {
  fields: { [key: string]: boolean | string } = {};

  type: T = null as any;

  @f alternativeTitles() {
    return (this as any) as AnimeFields<T & WorkForList.AlternativeTitles>;
  }

  @f startDate() {
    return (this as any) as AnimeFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as AnimeFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as AnimeFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as AnimeFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as AnimeFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as AnimeFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as AnimeFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as AnimeFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as AnimeFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as AnimeFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as AnimeFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as AnimeFields<T & WorkForList.UpdatedAt>;
  }

  //
  // AnimeForListFields
  //

  @f mediaType() {
    return (this as any) as AnimeFields<T & AnimeForList.MediaType>;
  }

  @f status() {
    return (this as any) as AnimeFields<T & AnimeForList.Status>;
  }

  myListStatus<U>(fields: AnimeListStatusFields<U>) {
    this.fields["my_list_status"] = fields.toString();
    return (this as any) as AnimeFields<T & { my_list_status: U }>;
  }

  @f numEpisodes() {
    return (this as any) as AnimeFields<T & AnimeForList.NumEpisodes>;
  }

  @f startSeason() {
    return (this as any) as AnimeFields<T & AnimeForList.StartSeason>;
  }

  @f broadcast() {
    return (this as any) as AnimeFields<T & AnimeForList.Broadcast>;
  }

  @f source() {
    return (this as any) as AnimeFields<T & AnimeForList.Source>;
  }

  @f averageEpisodeDuration() {
    return (this as any) as AnimeFields<
      T & AnimeForList.AverageEpisodeDuration
    >;
  }

  @f rating() {
    return (this as any) as AnimeFields<T & AnimeForList.Rating>;
  }

  @f studios() {
    return (this as any) as AnimeFields<T & AnimeForList.Studios>;
  }
}

AnimeFields.prototype.toString = function () {
  return Object.entries(this.fields)
    .map(([k, v]) => {
      if (typeof v === "boolean") return k;
      else if (typeof v === "string") return `${k}{${v}}`;
    })
    .join(",");
};

/**
 * Anime For List
 */
export function animeFields() {
  return new AnimeFields();
}

/**
 * Anime For Details
 */
export class AnimeDetailsFields<T> {
  fields: any = {};

  type: T = null as any;

  //
  // Work For List Fields
  //

  @f alternativeTitles() {
    return (this as any) as AnimeDetailsFields<
      T & WorkForList.AlternativeTitles
    >;
  }

  @f startDate() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.StartDate>;
  }

  @f endDate() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.EndDate>;
  }

  @f synopsis() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Synopsis>;
  }

  @f mean() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Mean>;
  }

  @f rank() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Rank>;
  }

  @f popularity() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Popularity>;
  }

  @f numListUsers() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.NumListUsers>;
  }

  @f numScoringUsers() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.NumScoringUsers>;
  }

  @f nsfw() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Nsfw>;
  }

  @f genres() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.Genres>;
  }

  @f createdAt() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.CreatedAt>;
  }

  @f updatedAt() {
    return (this as any) as AnimeDetailsFields<T & WorkForList.UpdatedAt>;
  }

  //
  // Anime For List Fields
  //

  @f mediaType() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.MediaType>;
  }

  @f status() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Status>;
  }

  myListStatus<U>(fields: AnimeListStatusFields<U>) {
    this.fields["my_list_status"] = fields.toString();
    return (this as any) as AnimeFields<T & { my_list_status: U }>;
  }

  @f numEpisodes() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.NumEpisodes>;
  }

  @f startSeason() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.StartSeason>;
  }

  @f broadcast() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Broadcast>;
  }

  @f source() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Source>;
  }

  @f averageEpisodeDuration() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForList.AverageEpisodeDuration
    >;
  }

  @f rating() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Rating>;
  }

  @f studios() {
    return (this as any) as AnimeDetailsFields<T & AnimeForList.Studios>;
  }

  //
  // Anime For Details Fields
  //

  @f pictures() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Pictures>;
  }
  @f background() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Background>;
  }
  @f relatedAnime() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.RelatedAnime
    >;
  }
  @f relatedManga() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.RelatedManga
    >;
  }
  @f recommendations() {
    return (this as any) as AnimeDetailsFields<
      T & AnimeForDetails.Recommendations
    >;
  }
  @f statistics() {
    return (this as any) as AnimeDetailsFields<T & AnimeForDetails.Statistics>;
  }
}

AnimeDetailsFields.prototype.toString = function () {
  return Object.entries(this.fields)
    .map(([k, v]) => {
      if (typeof v === "boolean") return k;
      else if (typeof v === "string") return `${k}{${v}}`;
    })
    .join(",");
};

/**
 * Anime For Details
 */
export function animeDetailsFields() {
  return new AnimeDetailsFields();
}

/**
 * Anime List Status
 */
export class AnimeListStatusFields<T> {
  fields: any = {};

  type: T = null as any;

  @f startDate() {
    return (this as any) as AnimeListStatusFields<
      T & AnimeListStatus.StartDate
    >;
  }
  @f finishDate() {
    return (this as any) as AnimeListStatusFields<
      T & AnimeListStatus.FinishDate
    >;
  }
  @f priority() {
    return (this as any) as AnimeListStatusFields<T & AnimeListStatus.Priority>;
  }
  @f rewatchValue() {
    return (this as any) as AnimeListStatusFields<
      T & AnimeListStatus.RewatchValue
    >;
  }
  @f tags() {
    return (this as any) as AnimeListStatusFields<T & AnimeListStatus.Tags>;
  }
  @f comments() {
    return (this as any) as AnimeListStatusFields<T & AnimeListStatus.Comments>;
  }
}

AnimeListStatusFields.prototype.toString = function () {
  return Object.entries(this.fields).join(",");
};

/**
 * Anime List Status
 */
export function animeListStatusFields() {
  return new AnimeListStatusFields<AnimeListStatusBase>();
}
