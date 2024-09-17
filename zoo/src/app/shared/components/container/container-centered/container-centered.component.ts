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
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, ZooHighlightKeywordPipe, ZooCardComponent]
})
export class ZooContainerCenteredComponent extends ZooBaseContainerComponent<IZooSectionContentContainerCentered> {}
