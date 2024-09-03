import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, computed } from "@angular/core";
import { IZooSectionContentContainerCentered } from "../../../interfaces";
import { ZooHighlightKeywordPipe } from "../../../pipes";
import { ZooBaseContainerComponent } from "../base-container/base-conatiner.component";
import { ZooCardComponent } from "../../card/card.component";


@Component({
	selector: 'zoo-container-centered',
	templateUrl: './container-centered.component.html',
	styleUrls: ['./container-centered.component.scss'],
	standalone: true,
	imports: [CommonModule, ZooHighlightKeywordPipe, ZooCardComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooContainerCenteredComponent extends ZooBaseContainerComponent<IZooSectionContentContainerCentered> {
	public hasImage = computed(() => !!this.metadata().image);
	public hasList = computed(() => !!this.metadata().list?.length);
	public hasCards = computed(() => !!this.metadata().cards?.length);
}
